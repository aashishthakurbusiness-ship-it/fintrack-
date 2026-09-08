from typing import Dict, Any, List
from datetime import datetime
from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str = Field("ok", description="Overall health status")
    service: str = Field(..., description="Service name")
    version: str = Field(..., description="Application version")
    timestamp: datetime = Field(default_factory=datetime.utcnow, description="Server UTC timestamp")


class ServiceStatus(BaseModel):
    name: str
    status: str
    description: str


class SystemStatusResponse(BaseModel):
    project_name: str
    version: str
    environment: str
    services: List[ServiceStatus]
    features_ready: Dict[str, bool]
    timestamp: datetime = Field(default_factory=datetime.utcnow)
