export default function TasksContainer({ children }: any) {
  return (
    <div className="flex w-1/2 h-auto flex-col content-between justify-center">
      {children}
    </div>
  );
}
