import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randColor from './randColor';

const Statistics = ({title, stats}) => {
    return (
        <section className={s.statistics}>
        {title && <h2 className={s.title}>Upload stats</h2>}

            <ul className={s.list}>
                {stats.map(stat => (
                    <li key={stat.id} className={s.item} style={{backgroundColor: randColor()}}>
                        <span className={s.label}>{stat.label}</span>
                <span className={s.percentage}>{stat.percentage}%</span>
            </li>))
                   }
        </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};


export default Statistics;