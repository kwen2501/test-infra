import { Probot } from "probot";
import autoCcBot from "./autoCcBot";
import autoLabelBot from "./autoLabelBot";
import ciflowBot from "./ciflowBot";
import ciflowPushTrigger from "./ciflowPushTrigger";
import webhookToDynamo from "./webhookToDynamo";
import verifyDisableTestIssueBot from "./verifyDisableTestIssueBot";
import mergeBot from "./mergeBot";

export default function bot(app: Probot) {
  autoCcBot(app);
  autoLabelBot(app);
  verifyDisableTestIssueBot(app);
  ciflowBot(app);
  ciflowPushTrigger(app);
  webhookToDynamo(app);
  mergeBot(app);
}
