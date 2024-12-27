'use client'
import { projectList } from '@/constants';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Props {
    title: string
}

interface ProjectType {
    id: number
    image: string
    title: string
    description: string
    link: string
    skills: string
}

const SingleProject = () => {

    const params = useParams();
    const id = params?.id as string; // Get the dynamic `id` from the URLs

    // const router = useRouter();
    // console.log('router.query', router.query)
    // const handleClick = () => router.push(`/project/${title}`);
    // const { id } = router.query

    const project: ProjectType | undefined = projectList.find((item) => item.id === Number(id));

    if (!project) {
        // handle the case when no project is found
        return <div>No project found</div>;
    }

    return (
        <div className='w-full my-[70px] !z-[21]'>

            <div className="md:mx-[100px] mx-auto  !z-[55]">
                <h1 className='text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5'>
                    {project.title}
                </h1>
                
                <Image
                    src={project.image}
                    height={700}
                    width={900}
                    alt={project.title}
                    className='w-full'
                />
                <div className="relative p-4">
                    {project.link && (
                        <a href={project.link} target="_blank" className='absolute top-[-50px] right-4 bg-[#57368C] hover:bg-[#a369ff] border border-[#7042f861] text-white rounded-full p-[5px]'>Visit</a>
                    )}
                    <p className='mt-2 text-gray-200 text-justify'>{project.description}</p>
                    <p className="mt-2 text-cyan-400 text-justify">Skills: {project.skills}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProject