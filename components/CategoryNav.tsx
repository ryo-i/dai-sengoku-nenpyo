import React, { useState, useEffect }  from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// Style
const Nav = styled.nav`
  .categoryTab {
    display: flex;
    list-style: none;
    padding: 0;
    overflow: scroll;
    border-bottom: 1px solid #ddd;
    li a {
      text-decoration: none;
      display: block;
      padding: 0px 15px 8px;
      color: #666;
      white-space: nowrap;
    }
    .current a {
      color: #A63744;
      border-bottom: 2px solid #A63744;
    }
  }
`;


// Component
function CategoryNav() {
  // Hooks
  const [categoryName, setCategoryName] = useState(null);

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (category) {
      setCategoryName(category);
    }
  }, [router, category]);

  return (
    <Nav className="cagterogyNav">
      <ul className="categoryTab">
        <li className={!categoryName ? 'current' : ''}><Link href="/"><a>すべて</a></Link></li>
        <li className={categoryName === 'senso' ? 'current' : ''}><Link href="/category/[category]" as="/category/senso"><a>戦争</a></Link></li>
        <li className={categoryName === 'gaiko' ? 'current' : ''}><Link href="/category/[category]" as="/category/gaiko"><a>外交</a></Link></li>
        <li className={categoryName === 'naisei' ? 'current' : ''}><Link href="/category/[category]" as="/category/naisei"><a>内政</a></Link></li>
        <li className={categoryName === 'nairan' ? 'current' : ''}><Link href="/category/[category]" as="/category/nairan"><a>内乱</a></Link></li>
        <li className={categoryName === 'bunka' ? 'current' : ''}><Link href="/category/[category]" as="/category/bunka"><a>文化</a></Link></li>
        <li className={categoryName === 'wareki' ? 'current' : ''}><Link href="/category/[category]" as="/category/wareki"><a>和暦</a></Link></li>
        <li className={categoryName === 'seireki' ? 'current' : ''}><Link href="/category/[category]" as="/category/seireki"><a>西暦</a></Link></li>
      </ul>
    </Nav>
  );
}

export default CategoryNav;
