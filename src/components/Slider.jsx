import {useState} from 'react';

import projects from '../data/projects';

const Slider = () =>{
    const [hoverClass, setHoverClass] = useState({hover: '', leave: ''});
    const [seeMore, setSeeMore] = useState(false);
    const handleHoverEffect = indicator =>{
        console.log(indicator);
        setHoverClass(prev => indicator === 'whileHoverOnProjectImg' ? {hover: indicator, leave: ''} : { hover: '', leave: indicator});
    }
    return <div className="slider">
        {
            projects.map(({id, name, desc, picture, techs}) => {
                return <div 
                        key={id}
                        className="project" 
                        onMouseEnter={() => handleHoverEffect('whileHoverOnProjectImg')}
                        onMouseLeave={() => handleHoverEffect('whileLeaveProjectImg')}
                    >
                        <img  src={picture} alt={name} />
                        <div className={`project-info ${hoverClass.hover} ${hoverClass.leave}`}>
                        <span className="name">{name}</span>
                        <span className="desc">
                            {
                                seeMore ?
                                <em>{desc}</em> :
                                <em>{desc.split(' ').slice(0, 20).join(' ')}...</em>
                            }
                            <em className="see-more" onClick={() => setSeeMore(!seeMore)}>
                                {seeMore ? 'See less' : 'See more'}
                            </em>
                        </span>
                        <div className="techs">
                            {
                                techs.map(tech => <span>{tech}</span>)
                            }
                        </div>
                        <div className="live-gh-btns">
                            <button type="button">Live</button>
                            <button type="button">Code</button>
                        </div>
                    </div>
                </div>
            })
        }
        <div className="btns">
            <button type="button">Prev</button>
            <button type="button">Next</button>
        </div>
    </div>
}

export default Slider;