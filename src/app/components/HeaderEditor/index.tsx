import { TbFile } from 'react-icons/tb';
import { FiMoreHorizontal } from 'react-icons/fi';

export default function HeaderEditor() {
  return (
    <div className="flex justify-between py-1 px-2">
      <button className="flex items-center gap-1 hover:bg-zinc-200 px-2 py-1">
        <span className="text-zinc-400">
          <TbFile fontSize={'18px'} />
        </span>
        <span className="text-sm text-zinc-700 font-normal">Anotações</span>
      </button>
      <button className=" hover:bg-zinc-200 px-2 py-1 text-zinc-600">
        <FiMoreHorizontal fontSize={'18px'} />
      </button>
    </div>
  );
}
