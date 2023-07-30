import { Skeleton } from '@mui/material';

export default function SkeletonLoading() {
  return (
    <div className='flex flex-col gap-10 p-16'>
      <Skeleton variant="rounded" width={'100%'} height={100} />
      <Skeleton variant="rounded" width={'100%'} height={300} />
      <Skeleton variant="rounded" width={'100%'} height={300} />
      <Skeleton variant="rounded" width={'100%'} height={300} />
    </div>
  )
}
