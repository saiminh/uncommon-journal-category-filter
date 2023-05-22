import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save() {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-journal-category-filter',
    }) }>
      <div className='uncommon-journal-category-filter-toggler'>Filters</div>
      <h2 className='uncommon-journal-category-filter-title fullw'>Journal Filters</h2>
      <div className='uncommon-journal-category-filter-list'>
        <InnerBlocks.Content />
      </div>
		</div>
	);
}
