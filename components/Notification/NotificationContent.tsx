
interface NotificationContentProps {
    text:string

}

export function NotificationContent({text}:NotificationContentProps) {
    return (
        <div className='flex-1 flex flex-col gap-1'>
            <p className='text-sm leading-relaxed text-zinc-900 dark:text-zinc-100'>
                {text}
            </p>
            <div className='text-xxs text-zinc-900 dark:text-zinc-400 flex items-center gap-1'>
                <span>Convite</span>    
                <span>há 3 min</span>    
            </div>           
        </div>
        )
}