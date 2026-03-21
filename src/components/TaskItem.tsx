import { Check, Trash2 } from "lucide-react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  index: number;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, index, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div
      className="group flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm transition-[box-shadow,transform] duration-200 hover:shadow-md active:scale-[0.99] opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
          task.completed
            ? "border-primary bg-primary"
            : "border-muted-foreground/40 hover:border-primary"
        }`}
        aria-label={task.completed ? "Mark incomplete" : "Mark complete"}
      >
        {task.completed && <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm transition-colors duration-200 overflow-wrap-anywhere ${
          task.completed ? "text-muted-foreground line-through" : "text-card-foreground"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="rounded-md p-1.5 text-muted-foreground/0 transition-colors duration-150 hover:text-destructive group-hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:text-muted-foreground active:scale-95"
        aria-label="Delete task"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export default TaskItem;
