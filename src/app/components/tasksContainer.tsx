export default function TasksContainer(props: any) {
  return (
    <div className="flex w-2/5 h-auto flex-col content-between justify-center">
      {props.children}
    </div>
  );
}
