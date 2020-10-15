import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'
import { selectDirecotrySection } from '../../redux/directory/direcotry.selectors';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id}{...otherProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirecotrySection
})

export default connect(mapStateToProps)(Directory);