import { Avatar, Button, CustomTable, generateColumns } from '@/presentation/components';
import { useDrawerStore } from '@/data/stores/drawer.store';
import { useModalStore } from '@/data/stores/modal.store';
import { ModalConfirm } from '@/presentation/components/internal/modals/modal-confirm';
import { ModalsId } from '@/domain/constants/modals-id';
import { toast } from '@/hooks/use-toast';
import { DrawerExample } from '@/presentation/components/internal/drawers/drawer-example';
import LogoutIcon from '@/presentation/components/icons/logout-icon';
import { AvatarImage } from '@radix-ui/react-avatar';
import { AvatarIcon } from '@radix-ui/react-icons';

export function PageA() {
  const { openModal, closeModal } = useModalStore();
  const { openDrawer, closeDrawer } = useDrawerStore();

  const exampleToast = () => {
    toast({
      title: 'Erro',
      description: 'Tente novamente mais tarde.',
      variant: 'error',
    });
  };

  const exampleDrawer = () => {
    openDrawer({
      id: 'drawer-example',
      children: (
        <DrawerExample
          closeModal={() => {
            closeDrawer('drawer-example');
          }}
        />
      ),
      onClose: () => {
        console.log('Drawer closed');
      },
    });
  };

  const exampleModal = () => {
    openModal({
      id: ModalsId.CONFIRMATION_MODAL,
      children: (
        <ModalConfirm
          title='Example'
          message='Click to close'
          onConfirm={() => closeModal(ModalsId.CONFIRMATION_MODAL)}
          textButtonConfirm='Close'
        />
      ),
    });
  };

  return (
    <div className='flex h-full w-full flex-col items-center 
    justify-center gap-5 p-5 bg-gray-900'>
      <div className='flex w-full h-6  border-b-red-500 border-b-1 '>
        <div className='w-full h-5 flex justify-between' >
          <div className='flex w-2xl h-5'>
            <AvatarIcon className='bg-amber-800 w-6 h-6'/><p className='text-amber-50'>Phoenix</p>
            </div>
            <div className='flex w-2xl h-5 justify-end'>
            <AvatarIcon className='bg-amber-900 w-6 h-6'/><p className='text-amber-50'>Phoenix</p>
            </div>
        </div>
      </div>
      <div className='w-full h-full'>
        <div className='mt-5 mb-5 bg-gray-950 w-9/10 h-70'>
          
        </div>
        <div className='flex w-full h-6 border-r-1 border-blue-400'>
          <div><p className='text-white'>Weapon Skins</p></div>
        </div>
        <div className='flex'>

        </div>
      </div>
      
      <div className='w-250'>
        <CustomTable
          columns={generateColumns({
            titles: ['Column 1', 'Column 2', 'Column 3'],
          })}
          data={[]}
        />
      </div>
      <Button onClick={exampleToast}>Open Toast</Button>
      <Button onClick={exampleModal}>Open Modal</Button>
      <Button onClick={exampleDrawer}>Open Drawer</Button>
    </div>
  );
}
