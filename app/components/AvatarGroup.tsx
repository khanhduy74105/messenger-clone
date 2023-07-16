'use client'

import { User } from "@prisma/client"
import clsx from "clsx"
import Image from "next/image"


interface AvatarGroupProps {
    users?: User[]
}
const AvatarGroup: React.FC<AvatarGroupProps> = ({users}) => {
    
    const sliceUsers = users?.slice(0, 3)

    const positionmap = {
        0: 'top-0 left-[12px]',
        1: 'bottom-0',
        2: 'bottom-0 right-0'
    }

   
    return (
        <div className="relative">
            <div className="
                relative
                inline-block
                rounded-full
                overflow-hidden
                h-9
                w-9
                md:h-11
                md:w-11"
            >
                {sliceUsers?.map((user, index) =>(
                    <div className={clsx(`
                        absolute
                        inline-block
                        rounded-full
                        overflow-hidden
                        h-[21px]
                        w-[21px]
                        ${positionmap[index as keyof typeof positionmap]}
                    `
                    )}>
                        <Image
                            alt="avatar"
                            src={user?.image || '/images/placeholder.jpg'}
                            fill
                        />
                    </div>
                ))}
            </div>
            <span className="absolute
            block
            rounded-full
            bg-green-500
            ring-2
            ring-white
            top-0
            right-0
            w2
            h-2
            md:w-3
            md:h-3
            ">

            </span>
        </div>
    )
}

export default AvatarGroup