import { MdViewList, MdGridView } from 'react-icons/md';

const ViewToggle = ({ view, onChange }) => (
  <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-100 border border-gray-200">
    <button
      onClick={() => onChange('list')}
      title="List view"
      className={`p-1.5 rounded-lg transition-all duration-200 ${
        view === 'list'
          ? 'bg-white shadow-sm text-(--color-secondary)'
          : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      <MdViewList size={18} />
    </button>
    <button
      onClick={() => onChange('grid')}
      title="Grid view"
      className={`p-1.5 rounded-lg transition-all duration-200 ${
        view === 'grid'
          ? 'bg-white shadow-sm text-(--color-secondary)'
          : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      <MdGridView size={18} />
    </button>
  </div>
);

export default ViewToggle;
