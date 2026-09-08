from fastapi import APIRouter
from datetime import datetime, timezone
from app.core.config import settings
from app.schemas.system import SystemStatusResponse, ServiceStatus

router = APIRouter()


@router.get("/status", response_model=SystemStatusResponse, summary="System Status & Capabilities")
async def system_status():
    """
    Returns application subsystem statuses and architectural readiness.
    Provides verified status flags for subsequent module rollouts.
    """
    return SystemStatusResponse(
        project_name=settings.PROJECT_NAME,
        version=settings.VERSION,
        environment=settings.ENVIRONMENT,
        services=[
            ServiceStatus(
                name="Core API Gateway",
                status="online",
                description="FastAPI ASGI engine operational.",
            ),
            ServiceStatus(
                name="Database Layer",
                status="standby",
                description="Supabase PostgreSQL integration pending schema initialization.",
            ),
            ServiceStatus(
                name="AI Intelligence Engine",
                status="standby",
                description="LLM reasoning & agent services ready for API key provisioning.",
            ),
            ServiceStatus(
                name="Vision & OCR Processing",
                status="standby",
                description="Multimodal receipt scanning service ready for integration.",
            ),
        ],
        features_ready={
            "foundation": True,
            "api_communication": True,
            "authentication": False,
            "database_persistence": False,
            "ai_advisor": False,
            "ocr_scanner": False,
        },
        timestamp=datetime.now(timezone.utc),
    )
