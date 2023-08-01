import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Notification } from './Notification';

export function Widget() {
    return (
      <div className="w-[448px] rounded overflow-hidden">
        {/* Header */}
        <div className="bg-zinc-400 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
            <span className="font-bold">Notificações</span>
            <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
                Marcar todas como lidas
            </button>
        </div>
        {/* Recent Section */}
        <div className="font-medium bg-zinc-300 dark:bg-zinc-950 px-5 py-2 flex text-sm text-zinc-700 dark:text-zinc-400 ">
            Recentes 
        </div>

        <div className='divide-y-2 divide-zinc-500 dark:divide-zinc-950'>
            <Notification.Root>
                <Notification.Icon icon={PeopleOutlineOutlinedIcon} />
                <Notification.Content text='Você recebeu um convite para fazer parte lorem ipsum' />
                {/* <Notification.Actions /> */}
            </Notification.Root>
         
            <Notification.Root>
                <Notification.Icon icon={PeopleOutlineOutlinedIcon} />
                <Notification.Content text='Você recebeu um convite para fazer parte lorem ipsum' />
                <Notification.Actions>
                    <Notification.Action icon={ClearOutlinedIcon} />
                    <Notification.Action icon={CheckOutlinedIcon} className='dark:bg-violet-500 dark:hover:bg-violet-600' />
                </Notification.Actions>
            </Notification.Root>
           
        </div>

        {/* Old Section */}
        <div className="font-medium bg-zinc-300 dark:bg-zinc-950 px-5 py-2 flex text-sm text-zinc-700 dark:text-zinc-400 ">
            Antigas 
        </div>

        <div className='divide-y-2 divide-zinc-500 dark:divide-zinc-950'>
        <Notification.Root>
                <Notification.Icon icon={PeopleOutlineOutlinedIcon} />
                <Notification.Content text='Você recebeu um convite para fazer parte lorem ipsum' />
                {/* <Notification.Actions /> */}
            </Notification.Root>
            <Notification.Root>
                <Notification.Icon icon={PeopleOutlineOutlinedIcon} />
                <Notification.Content text='Você recebeu um convite para fazer parte lorem ipsum' />
                {/* <Notification.Actions /> */}
            </Notification.Root>
        </div>
      </div>
    )
}