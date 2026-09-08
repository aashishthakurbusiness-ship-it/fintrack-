from fastapi import APIRouter
from datetime import datetime, timezone
from app.core.config import settings
from app.schemas.system import HealthResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse, summary="API Health Check")
async def health_check():
    """
    Returns server liveness and service metadata.
    Used by frontend health monitors and deployment probes.
    """
    return HealthResponse(
        status="ok",
        service=settings.PROJECT_NAME,
        version=settings.VERSION,
        timestamp=datetime.now(timezone.utc),
    )
