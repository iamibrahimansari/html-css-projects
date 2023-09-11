import {useState} from 'react';
import {Link} from 'react-router-dom';

import projects from '../data/projects';

const Slider = () =>{
    const [hoverClass, setHoverClass] = useState({hover: '', leave: ''});
    const [seeMore, setSeeMore] = useState(false);
    const [currentProject, setCurrentProject] = useState(1);
    const handleHoverEffect = indicator =>{
        setHoverClass(prev => indicator === 'whileHoverOnProjectImg' ? {hover: indicator, leave: ''} : { hover: '', leave: indicator});
    }

    const handlePrevAndNextBtn = indicator =>{
        setCurrentProject(prev => indicator === 'prev' ? prev - 1 : prev + 1);
    }
    return <div className="slider">
        {
            projects.map(({id, name, desc, picture, techs, code, live}) => {
                return <div 
                        style={{display: id !== currentProject ? 'none': 'block'}}
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
                                techs.map(tech => <span key={tech}>{tech}</span>)
                            }
                        </div>
                        <div className="live-gh-btns">
                            <Link to={live} target="_blank">Live</Link>
                            <Link to={code} target="_blank">Code</Link>
                        </div>
                    </div>
                </div>
            })
        }
        <div className="btns">
            <button type="button" onClick={() => handlePrevAndNextBtn('prev')} disabled={currentProject === 1}>Prev</button>
            <button type="button" onClick={() => handlePrevAndNextBtn('next')} disabled={currentProject === projects.length}>Next</button>
        </div>
    </div>
}

export default Slider;