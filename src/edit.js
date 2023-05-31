import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-journal-category-filter',
    }) }>
      <div className='uncommon-journal-category-filter-toggler'>Filters</div>
      <h2 className='uncommon-journal-category-filter-title fullw'>Journal Filters</h2>
      <div className='uncommon-journal-category-filter-list'>
        <InnerBlocks
          allowedBlocks={['core/categories']}
          template={[
            ['core/categories', {showHierarchy: true}]
          ]}
        />
      </div>
		</div>
	);
}
