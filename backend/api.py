from livekit.agents import llm
from typing import Annotated
import logging
from db_driver import DatabaseDriver

logger = logging.getLogger("ria-marketing")
logger.setLevel(logging.INFO)

DB = DatabaseDriver()

class AssistantFnc:
    def __init__(self):
        self._visitor_data = {
            "name": "",
            "business_type": "",
            "customer_count": "",
            "current_process": "",
            "pain_points": ""
        }
        self.trial_minutes = 100

    @llm.function_tool(description="get information about RIA's free trial and pricing plan")
    def get_plan_and_trial_info(self):
        """Returns the configured trial and pricing details."""
        logger.info("get_plan_and_trial_info called")
        return (
            f"Configured Trial: {self.trial_minutes} minutes of free voice calling trial for any business to evaluate RIA. "
            "Pricing policy: Customized based on business call volume and enterprise requirements. "
            "Exact pricing quotes are provided directly by our sales team."
        )

    @llm.function_tool(description="get specific feature information about RIA Collection Assistant")
    def get_product_features(
        self,
        feature_name: Annotated[str, "The feature to look up: e.g., 'integration', 'commitment_tracking', 'reporting', 'languages', 'compliance'"]
    ):
        """Returns product feature descriptions for RIA."""
        logger.info("get_product_features called with feature: %s", feature_name)
        feature_lower = feature_name.lower()
        if "integration" in feature_lower or "tally" in feature_lower or "erp" in feature_lower:
            return "RIA integrates smoothly with popular Indian accounting & ERP systems like Tally, Zoho Books, Busy, and custom CRMs/Excel sheets."
        elif "commitment" in feature_lower or "payment" in feature_lower:
            return "RIA politely captures exact promised payment dates, notes customer reasons, updates your ledger, and schedules automated follow-ups."
        elif "language" in feature_lower:
            return "RIA speaks natural Telugu, English, Hindi, and regional mixed speech (Tanglish), adapting instantly to customer comfort."
        elif "report" in feature_lower or "analytics" in feature_lower:
            return "Daily automated dashboard reports showing calls made, payment promises recorded, amounts expected, and accounts needing escalation."
        else:
            return (
                "RIA provides end-to-end payment follow-up automation: ledger analysis, scheduled polite calling, "
                "commitment date recording, automated reminders, and real-time dashboard analytics."
            )

    @llm.function_tool(description="save visitor details for a free trial setup or sales team callback")
    def record_demo_interest(
        self,
        name: Annotated[str, "Visitor or business owner's name"],
        phone: Annotated[str, "Phone number or WhatsApp number for contact"],
        business_name: Annotated[str, "Name of the business or company"] = "",
        notes: Annotated[str, "Key requirements or notes mentioned by the visitor"] = ""
    ):
        """Records lead interest into database for trial onboarding."""
        logger.info("record_demo_interest: name=%s, phone=%s, business=%s", name, phone, business_name)
        lead_id = DB.create_lead(name=name, phone=phone, business_name=business_name, notes=notes)
        return f"Visitor details recorded successfully with lead ID {lead_id}. Our team will reach out to activate the {self.trial_minutes} minute free trial."