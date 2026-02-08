import os
from dotenv import load_dotenv

load_dotenv()

def get_database_url():
    url = os.environ.get('DATABASE_URL')
    if url:
        # Render uses postgres:// but SQLAlchemy needs postgresql://
        if url.startswith('postgres://'):
            url = url.replace('postgres://', 'postgresql://', 1)
        return url
    return 'sqlite:///robosust.db'

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'robosust-secret-key-change-in-production'
    SQLALCHEMY_DATABASE_URI = get_database_url()
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploads')
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16MB max file size
