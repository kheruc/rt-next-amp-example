import Link from 'next/link';
import categories from '../data/categories.json';

const Sidebar = () => {
  return (
    <amp-sidebar id="sidebar" className="sidebar" layout="nodisplay">
      <button on="tap:sidebar.toggle" className="sidebar-trigger">
        ✕
      </button>

      <ul className="menu">
        {categories.map(cat => {
          return (
            <li key={cat.id}>
              <Link href={`/category?id=${cat.id}`} as={`/category/${cat.id}`}>
                <a>{cat.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </amp-sidebar>
  );
};

export default Sidebar;
