'use client';
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from 'next/navigation';

const PropertyByIdPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const pathname = usePathname();


  console.log('id', id);
  console.log('searchParams->name', name);
  console.log('pathname', pathname);

  return <div>
    <button className='block bg-blue-100 p-2' onClick={() => router.replace('/')}>
      Back to Home
    </button>
  </div>;
};
export default PropertyByIdPage;
