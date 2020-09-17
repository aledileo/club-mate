import { formatDistanceToNowStrict } from 'date-fns';

export default function IndexPage() {
  const originDate = new Date(2020, 7, 1);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="py-20 max-w-6xl">
        <h1 className="text-6xl text-center text-accent-1">
          It's been { formatDistanceToNowStrict(originDate, { unit: 'day' }) } since the club-mate has been standing in Ale's desk.
        </h1>
      </div>
    </div>
  )
}
