export function FormSkeleton() {
  return (
    <div className="space-y-6 w-full animate-pulse">
      <div>
        <div className="h-4 w-16 bg-muted rounded mb-2" />
        <div className="h-10 w-full bg-muted rounded-xl" />
      </div>
      <div>
        <div className="h-4 w-16 bg-muted rounded mb-2" />
        <div className="h-10 w-full bg-muted rounded-xl" />
      </div>
      <div>
        <div className="h-4 w-20 bg-muted rounded mb-2" />
        <div className="h-24 w-full bg-muted rounded-xl" />
      </div>
      <div className="h-11 w-full bg-muted rounded-xl" />
    </div>
  );
}
