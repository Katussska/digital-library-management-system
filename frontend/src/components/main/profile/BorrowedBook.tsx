export default function BorrowedBook({ title, date }: { title: string, date: string }) {
  return (
    <div className="flex justify-between m-5 p-5 shadow-md ">
      <div>
        {title}
      </div>
      <div>
        {date}
      </div>
    </div>
  );
}