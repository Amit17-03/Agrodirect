import { useState, useRef } from "react";
import { Plus, BookOpen, ListChecks } from "lucide-react";
import TaskItem from "@/components/TaskItem";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Read Chapter 4 of Biology", completed: false },
    { id: "2", title: "Submit Math homework", completed: true },
    { id: "3", title: "Prepare slides for History presentation", completed: false },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks((prev) => [
      { id: crypto.randomUUID(), title: trimmed, completed: false },
      ...prev,
    ]);
    setInput("");
    inputRef.current?.focus();
  };

  const toggleTask = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTask = (id: string) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const pending = tasks.filter((t) => !t.completed).length;

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-20">
      {/* Header */}
      <div className="mb-10 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ lineHeight: 1.1 }}>
          Student Tasks
        </h1>
        <p className="text-sm text-muted-foreground">
          {pending === 0 ? "All caught up! 🎉" : `${pending} task${pending > 1 ? "s" : ""} remaining`}
        </p>
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => { e.preventDefault(); addTask(); }}
        className="mb-8 flex w-full max-w-md gap-2 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "100ms" }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task…"
          className="flex-1 rounded-lg border bg-card px-4 py-2.5 text-sm shadow-sm transition-shadow duration-200 placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-[transform,box-shadow,opacity] duration-150 hover:shadow-md active:scale-95 disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Add</span>
        </button>
      </form>

      {/* Task List */}
      <div className="flex w-full max-w-md flex-col gap-2">
        {tasks.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-16 text-muted-foreground opacity-0 animate-fade-in-up">
            <ListChecks className="h-10 w-10 opacity-40" />
            <p className="text-sm">No tasks yet. Add one above!</p>
          </div>
        )}
        {tasks.map((task, i) => (
          <TaskItem
            key={task.id}
            task={task}
            index={i}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
