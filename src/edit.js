import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-journal-category-filter',
    }) }>
			<InnerBlocks
        allowedBlocks={['core/categories']}
        template={[
          ['core/categories', {showHierarchy: true}]
        ]}
      />
		</div>
	);
}
