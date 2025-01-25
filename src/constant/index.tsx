import Badge from "../shared/components/Badge";
import { Priority } from "../types";

export const PRIORITY_LEVELS = ["Low", "Medium", "High"] as const;
export const TASK_STATUS= ["All", "Completed", "Uncompleted"] as const;

export const priorityIcon = (priority:Priority | undefined) => (
  <Badge
    type={
      priority === "High"
        ? "error"
        : priority === "Medium"
          ? "info"
          : "warning"
    }
    title={priority}
    showDot
  />
);