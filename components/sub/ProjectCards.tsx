import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: number
  src: string
  title: string
  description: string
  link: string
  skills: string
}

const ProjectCards = ({ id, src, title, description, link, skills }: Props) => {
  const truncateText = (text: string | any[], maxLength = 150) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncated = text.slice(0, maxLength); // Cut the text to maxLength
    const lastSpaceIndex = truncated.lastIndexOf(' '); // Find the last space to avoid cutting a word
    return (lastSpaceIndex > 0 ? truncated.slice(0, lastSpaceIndex) : truncated) + '...';
  }

  return (
    <div className='relative w-[300px] overflow-hidden rounded-lg border border-[#2A0E61]'>
      <Image
        src={src}
        height={1000}
        width={1000}
        alt={title}
        className='w-full h-[150px]'
      />
      <div className="relative p-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='absolute top-[-50px] right-4 bg-[#57368C] hover:bg-[#a369ff] border border-[#7042f861] text-white rounded-full p-[5px]'
          >
            Visit
          </a>
        )}
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className='mt-2 text-gray-200 text-justify'>
          {truncateText(description)}{' '}
          <Link href={`/project/${id}`} className="text-blue-500 hover:underline">
            Read More
          </Link>
        </p>
        <p className="mt-2 text-cyan-400 text-justify">Skills: {skills}</p>
      </div>
    </div>
  )
}

export default ProjectCards
