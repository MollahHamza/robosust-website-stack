from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from config import Config
from models import db, Admin, Achievement, Initiative, Workshop, Alumni, Project, BlogPost, ForumCategory, ForumPost, ForumReply
import os

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, supports_credentials=True, origins=["http://localhost:5173", "https://*.netlify.app", "https://*.onrender.com"])

db.init_app(app)
login_manager = LoginManager()
login_manager.init_app(app)

# Create uploads folder
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@login_manager.user_loader
def load_user(user_id):
    return Admin.query.get(int(user_id))

# Initialize database and create default admin
def init_db():
    with app.app_context():
        db.create_all()
        if not Admin.query.filter_by(username='admin').first():
            admin = Admin(username='admin')
            admin.set_password('robosust2024')
            db.session.add(admin)
            db.session.commit()
            print("Default admin created: admin / robosust2024")

        if not ForumCategory.query.first():
            categories = [
                ForumCategory(name='General Discussion', description='General topics about robotics', order=1),
                ForumCategory(name='Projects', description='Discuss ongoing and past projects', order=2),
                ForumCategory(name='Tutorials', description='Share and discuss tutorials', order=3),
                ForumCategory(name='Events', description='Upcoming events and workshops', order=4),
            ]
            db.session.add_all(categories)
            db.session.commit()

# ============ AUTH ROUTES ============
@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    admin = Admin.query.filter_by(username=data.get('username')).first()
    if admin and admin.check_password(data.get('password')):
        login_user(admin)
        return jsonify({'success': True, 'message': 'Logged in successfully'})
    return jsonify({'success': False, 'message': 'Invalid credentials'}), 401

@app.route('/api/auth/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'success': True, 'message': 'Logged out successfully'})

@app.route('/api/auth/check', methods=['GET'])
def check_auth():
    return jsonify({'authenticated': current_user.is_authenticated})

@app.route('/api/auth/change-password', methods=['POST'])
@login_required
def change_password():
    data = request.get_json()
    if current_user.check_password(data.get('current_password')):
        current_user.set_password(data.get('new_password'))
        db.session.commit()
        return jsonify({'success': True, 'message': 'Password changed successfully'})
    return jsonify({'success': False, 'message': 'Current password is incorrect'}), 400

# ============ ACHIEVEMENTS ROUTES ============
@app.route('/api/achievements', methods=['GET'])
def get_achievements():
    achievements = Achievement.query.order_by(Achievement.order, Achievement.date.desc()).all()
    return jsonify([a.to_dict() for a in achievements])

@app.route('/api/achievements', methods=['POST'])
@login_required
def create_achievement():
    data = request.get_json()
    achievement = Achievement(
        title=data['title'],
        description=data['description'],
        image=data.get('image'),
        order=data.get('order', 0)
    )
    db.session.add(achievement)
    db.session.commit()
    return jsonify(achievement.to_dict()), 201

@app.route('/api/achievements/<int:id>', methods=['PUT'])
@login_required
def update_achievement(id):
    achievement = Achievement.query.get_or_404(id)
    data = request.get_json()
    achievement.title = data.get('title', achievement.title)
    achievement.description = data.get('description', achievement.description)
    achievement.image = data.get('image', achievement.image)
    achievement.order = data.get('order', achievement.order)
    db.session.commit()
    return jsonify(achievement.to_dict())

@app.route('/api/achievements/<int:id>', methods=['DELETE'])
@login_required
def delete_achievement(id):
    achievement = Achievement.query.get_or_404(id)
    db.session.delete(achievement)
    db.session.commit()
    return jsonify({'success': True})

# ============ INITIATIVES ROUTES ============
@app.route('/api/initiatives', methods=['GET'])
def get_initiatives():
    initiatives = Initiative.query.order_by(Initiative.order).all()
    return jsonify([i.to_dict() for i in initiatives])

@app.route('/api/initiatives', methods=['POST'])
@login_required
def create_initiative():
    data = request.get_json()
    initiative = Initiative(
        title=data['title'],
        description=data['description'],
        image=data.get('image'),
        status=data.get('status', 'ongoing'),
        order=data.get('order', 0)
    )
    db.session.add(initiative)
    db.session.commit()
    return jsonify(initiative.to_dict()), 201

@app.route('/api/initiatives/<int:id>', methods=['PUT'])
@login_required
def update_initiative(id):
    initiative = Initiative.query.get_or_404(id)
    data = request.get_json()
    initiative.title = data.get('title', initiative.title)
    initiative.description = data.get('description', initiative.description)
    initiative.image = data.get('image', initiative.image)
    initiative.status = data.get('status', initiative.status)
    initiative.order = data.get('order', initiative.order)
    db.session.commit()
    return jsonify(initiative.to_dict())

@app.route('/api/initiatives/<int:id>', methods=['DELETE'])
@login_required
def delete_initiative(id):
    initiative = Initiative.query.get_or_404(id)
    db.session.delete(initiative)
    db.session.commit()
    return jsonify({'success': True})

# ============ WORKSHOPS ROUTES ============
@app.route('/api/workshops', methods=['GET'])
def get_workshops():
    workshops = Workshop.query.order_by(Workshop.order, Workshop.date.desc()).all()
    return jsonify([w.to_dict() for w in workshops])

@app.route('/api/workshops', methods=['POST'])
@login_required
def create_workshop():
    data = request.get_json()
    workshop = Workshop(
        title=data['title'],
        description=data.get('description'),
        image=data.get('image'),
        location=data.get('location'),
        order=data.get('order', 0)
    )
    db.session.add(workshop)
    db.session.commit()
    return jsonify(workshop.to_dict()), 201

@app.route('/api/workshops/<int:id>', methods=['PUT'])
@login_required
def update_workshop(id):
    workshop = Workshop.query.get_or_404(id)
    data = request.get_json()
    workshop.title = data.get('title', workshop.title)
    workshop.description = data.get('description', workshop.description)
    workshop.image = data.get('image', workshop.image)
    workshop.location = data.get('location', workshop.location)
    workshop.order = data.get('order', workshop.order)
    db.session.commit()
    return jsonify(workshop.to_dict())

@app.route('/api/workshops/<int:id>', methods=['DELETE'])
@login_required
def delete_workshop(id):
    workshop = Workshop.query.get_or_404(id)
    db.session.delete(workshop)
    db.session.commit()
    return jsonify({'success': True})

# ============ ALUMNI ROUTES ============
@app.route('/api/alumni', methods=['GET'])
def get_alumni():
    alumni = Alumni.query.order_by(Alumni.order).all()
    return jsonify([a.to_dict() for a in alumni])

@app.route('/api/alumni', methods=['POST'])
@login_required
def create_alumni():
    data = request.get_json()
    alumni = Alumni(
        name=data['name'],
        department=data.get('department'),
        batch=data.get('batch'),
        image=data.get('image'),
        current_position=data.get('current_position'),
        linkedin=data.get('linkedin'),
        order=data.get('order', 0)
    )
    db.session.add(alumni)
    db.session.commit()
    return jsonify(alumni.to_dict()), 201

@app.route('/api/alumni/<int:id>', methods=['PUT'])
@login_required
def update_alumni(id):
    alumni = Alumni.query.get_or_404(id)
    data = request.get_json()
    alumni.name = data.get('name', alumni.name)
    alumni.department = data.get('department', alumni.department)
    alumni.batch = data.get('batch', alumni.batch)
    alumni.image = data.get('image', alumni.image)
    alumni.current_position = data.get('current_position', alumni.current_position)
    alumni.linkedin = data.get('linkedin', alumni.linkedin)
    alumni.order = data.get('order', alumni.order)
    db.session.commit()
    return jsonify(alumni.to_dict())

@app.route('/api/alumni/<int:id>', methods=['DELETE'])
@login_required
def delete_alumni(id):
    alumni = Alumni.query.get_or_404(id)
    db.session.delete(alumni)
    db.session.commit()
    return jsonify({'success': True})

# ============ PROJECTS ROUTES ============
@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.order_by(Project.order, Project.created_at.desc()).all()
    return jsonify([p.to_dict() for p in projects])

@app.route('/api/projects', methods=['POST'])
@login_required
def create_project():
    data = request.get_json()
    project = Project(
        title=data['title'],
        description=data['description'],
        image=data.get('image'),
        status=data.get('status', 'ongoing'),
        github=data.get('github'),
        demo=data.get('demo'),
        order=data.get('order', 0)
    )
    db.session.add(project)
    db.session.commit()
    return jsonify(project.to_dict()), 201

@app.route('/api/projects/<int:id>', methods=['PUT'])
@login_required
def update_project(id):
    project = Project.query.get_or_404(id)
    data = request.get_json()
    project.title = data.get('title', project.title)
    project.description = data.get('description', project.description)
    project.image = data.get('image', project.image)
    project.status = data.get('status', project.status)
    project.github = data.get('github', project.github)
    project.demo = data.get('demo', project.demo)
    project.order = data.get('order', project.order)
    db.session.commit()
    return jsonify(project.to_dict())

@app.route('/api/projects/<int:id>', methods=['DELETE'])
@login_required
def delete_project(id):
    project = Project.query.get_or_404(id)
    db.session.delete(project)
    db.session.commit()
    return jsonify({'success': True})

# ============ BLOG ROUTES ============
@app.route('/api/blog', methods=['GET'])
def get_blog_posts():
    published_only = request.args.get('published', 'true') == 'true'
    query = BlogPost.query
    if published_only:
        query = query.filter_by(published=True)
    posts = query.order_by(BlogPost.created_at.desc()).all()
    return jsonify([p.to_dict() for p in posts])

@app.route('/api/blog/<int:id>', methods=['GET'])
def get_blog_post(id):
    post = BlogPost.query.get_or_404(id)
    return jsonify(post.to_dict())

@app.route('/api/blog', methods=['POST'])
@login_required
def create_blog_post():
    data = request.get_json()
    post = BlogPost(
        title=data['title'],
        content=data['content'],
        excerpt=data.get('excerpt'),
        image=data.get('image'),
        author=data.get('author'),
        published=data.get('published', False)
    )
    db.session.add(post)
    db.session.commit()
    return jsonify(post.to_dict()), 201

@app.route('/api/blog/<int:id>', methods=['PUT'])
@login_required
def update_blog_post(id):
    post = BlogPost.query.get_or_404(id)
    data = request.get_json()
    post.title = data.get('title', post.title)
    post.content = data.get('content', post.content)
    post.excerpt = data.get('excerpt', post.excerpt)
    post.image = data.get('image', post.image)
    post.author = data.get('author', post.author)
    post.published = data.get('published', post.published)
    db.session.commit()
    return jsonify(post.to_dict())

@app.route('/api/blog/<int:id>', methods=['DELETE'])
@login_required
def delete_blog_post(id):
    post = BlogPost.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return jsonify({'success': True})

# ============ FORUM ROUTES ============
@app.route('/api/forum/categories', methods=['GET'])
def get_forum_categories():
    categories = ForumCategory.query.order_by(ForumCategory.order).all()
    return jsonify([c.to_dict() for c in categories])

@app.route('/api/forum/categories', methods=['POST'])
@login_required
def create_forum_category():
    data = request.get_json()
    category = ForumCategory(
        name=data['name'],
        description=data.get('description'),
        order=data.get('order', 0)
    )
    db.session.add(category)
    db.session.commit()
    return jsonify(category.to_dict()), 201

@app.route('/api/forum/posts', methods=['GET'])
def get_forum_posts():
    category_id = request.args.get('category_id')
    query = ForumPost.query
    if category_id:
        query = query.filter_by(category_id=category_id)
    posts = query.order_by(ForumPost.created_at.desc()).all()
    return jsonify([p.to_dict() for p in posts])

@app.route('/api/forum/posts/<int:id>', methods=['GET'])
def get_forum_post(id):
    post = ForumPost.query.get_or_404(id)
    return jsonify({
        **post.to_dict(),
        'replies': [r.to_dict() for r in post.replies]
    })

@app.route('/api/forum/posts', methods=['POST'])
def create_forum_post():
    data = request.get_json()
    post = ForumPost(
        title=data['title'],
        content=data['content'],
        author_name=data['author_name'],
        author_email=data.get('author_email'),
        category_id=data.get('category_id')
    )
    db.session.add(post)
    db.session.commit()
    return jsonify(post.to_dict()), 201

@app.route('/api/forum/posts/<int:id>', methods=['DELETE'])
@login_required
def delete_forum_post(id):
    post = ForumPost.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return jsonify({'success': True})

@app.route('/api/forum/posts/<int:post_id>/replies', methods=['POST'])
def create_forum_reply(post_id):
    post = ForumPost.query.get_or_404(post_id)
    data = request.get_json()
    reply = ForumReply(
        content=data['content'],
        author_name=data['author_name'],
        author_email=data.get('author_email'),
        post_id=post_id
    )
    db.session.add(reply)
    db.session.commit()
    return jsonify(reply.to_dict()), 201

@app.route('/api/forum/replies/<int:id>', methods=['DELETE'])
@login_required
def delete_forum_reply(id):
    reply = ForumReply.query.get_or_404(id)
    db.session.delete(reply)
    db.session.commit()
    return jsonify({'success': True})

# ============ FILE UPLOAD ============
@app.route('/api/upload', methods=['POST'])
@login_required
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    from werkzeug.utils import secure_filename
    filename = secure_filename(file.filename)

    import time
    filename = f"{int(time.time())}_{filename}"

    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    return jsonify({'url': f'/uploads/{filename}', 'filename': filename})

@app.route('/uploads/<filename>')
def serve_upload(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# ============ SEED DATA ============
@app.route('/api/seed', methods=['POST'])
@login_required
def seed_data():
    achievements_data = [
        {'title': 'NASA Space Apps Challenge 2024', 'description': 'Team EcoQuest secured notable position with innovative environmental monitoring solution.', 'image': '/assets/images/work/NasaSpaceApp.jpg'},
        {'title': 'BUET Chemical Fest 2024', 'description': 'Team showcased exceptional performance in the ChemiCar segment at BUET Chemical Fest 2024.', 'image': '/assets/images/work/Ghorar_gari.jpg'},
        {'title': 'Smart Unibator Innovation Hub', 'description': 'Team Automama represented SUST at the Smart Unibator Innovation Hub program.', 'image': '/assets/images/work/Unovationhub_1.jpg'},
        {'title': 'KUET LFR Contest', 'description': 'Team Void Sust achieved remarkable success in the KUET Calibration LFR Contest.', 'image': '/assets/images/work/KUET-1.jpg'},
        {'title': 'BRAC IEEE Satellite Expedition', 'description': 'Team Ethereal Luminary participated in BRAC University IEEE Satellite competition.', 'image': '/assets/images/work/Comsot.jpg'},
        {'title': 'KUET LFR Champion', 'description': 'Team SUST Mavericks emerged as champions in the Line Follower Robot segment.', 'image': '/assets/images/work/KUET-2.jpg'}
    ]
    for i, data in enumerate(achievements_data):
        if not Achievement.query.filter_by(title=data['title']).first():
            db.session.add(Achievement(order=i, **data))

    initiatives_data = [
        {'title': 'Automama', 'description': "Bangladesh's first Level 2 autonomous car project.", 'image': '/assets/images/home/automama.png', 'status': 'ongoing'},
        {'title': 'Orca', 'description': 'Autonomous Underwater Vehicle (AUV) for underwater exploration.', 'image': '/assets/images/home/orca.png', 'status': 'ongoing'},
        {'title': 'ChemiCar', 'description': 'Custom battery powered car with color sensor stopping mechanism.', 'image': '/assets/images/home/chemicar.png', 'status': 'ongoing'}
    ]
    for i, data in enumerate(initiatives_data):
        if not Initiative.query.filter_by(title=data['title']).first():
            db.session.add(Initiative(order=i, **data))

    workshops_data = [
        {'title': 'AI Awareness Workshop', 'description': 'AI awareness workshop in JSPSC', 'image': '/assets/images/workshop/1.jpg'},
        {'title': 'Robotics Fundamentals', 'description': 'Introduction to robotics workshop', 'image': '/assets/images/workshop/2.jpg'},
        {'title': 'Arduino Workshop', 'description': 'Hands-on Arduino programming session', 'image': '/assets/images/workshop/3.jpg'},
        {'title': 'PCB Design Workshop', 'description': 'PCB design and fabrication training', 'image': '/assets/images/workshop/4.jpg'},
        {'title': 'IoT Workshop', 'description': 'Internet of Things fundamentals', 'image': '/assets/images/workshop/5.jpg'},
        {'title': 'Machine Learning Seminar', 'description': 'Introduction to ML for robotics', 'image': '/assets/images/workshop/6.jpg'}
    ]
    for i, data in enumerate(workshops_data):
        if not Workshop.query.filter_by(title=data['title']).first():
            db.session.add(Workshop(order=i, **data))

    alumni_data = [
        {'name': 'Noushad Sojib', 'department': 'CSE', 'batch': '2009-10', 'image': '/assets/images/home/members/Nowshad.png'},
        {'name': 'Md Farhanul Islam', 'department': 'EEE', 'batch': '2012-13', 'image': '/assets/images/home/members/Farhanul.png'},
        {'name': 'Taufiq Rahman', 'department': 'IPE', 'batch': '2013-14', 'image': '/assets/images/home/members/Tawfiq.png'},
        {'name': 'Umme Sumaya Jannat', 'department': 'CSE', 'batch': '2014-15', 'image': '/assets/images/home/members/Umme Sumaya Jannat.png'},
        {'name': 'Ali Tarique Zaman', 'department': 'CEE', 'batch': '2015-16', 'image': '/assets/images/home/members/Ali Tarique Zaman.png'},
        {'name': 'Anamul Haque', 'department': 'MEE', 'batch': '2016-17', 'image': '/assets/images/home/members/Anamul.png'}
    ]
    for i, data in enumerate(alumni_data):
        if not Alumni.query.filter_by(name=data['name']).first():
            db.session.add(Alumni(order=i, **data))

    projects_data = [
        {'title': 'Sign Language Recognition System', 'description': 'IoT-based system that recognizes sign language gestures.', 'image': '/assets/images/project/1.jpg', 'status': 'completed'},
        {'title': 'Autonomous Water Vehicle', 'description': 'Self-navigating water vehicle with collision avoidance.', 'image': '/assets/images/project/2.jpg', 'status': 'ongoing'},
        {'title': 'Ribo - Social Humanoid Robot', 'description': "Bangladesh's first social humanoid robot that speaks Bengali.", 'image': '/assets/images/home/intro-1.jpeg', 'status': 'completed'}
    ]
    for i, data in enumerate(projects_data):
        if not Project.query.filter_by(title=data['title']).first():
            db.session.add(Project(order=i, **data))

    db.session.commit()
    return jsonify({'success': True, 'message': 'Data seeded successfully'})

if __name__ == '__main__':
    init_db()
    app.run(debug=True, port=5000)
