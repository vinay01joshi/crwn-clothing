import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { DirectoryMenuContainer } from './directory.styles'
import MenuItem from '../menu-item/menu-item.component'
import { selectDirecotrySection } from '../../redux/directory/direcotry.selectors';

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {
            sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id}{...otherProps} />
            ))
        }
    </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirecotrySection
})

export default connect(mapStateToProps)(Directory);