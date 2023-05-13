import './overview.css';
import { useState } from 'react';
import arrow from '../../assets/collapse button.png';

const Overview = () => {
    const [value, onChange] = useState("");
    const [time, onChangeTime] = useState("");
    const [workingDays, setWorkingDays] = useState(false);

    const handleWorkingDays = event => {
        setWorkingDays(!workingDays);
    }

    const date = new Date();

    setInterval(function () {
        today();
    }, 1000);

    // setInterval(function () {
    //   todayTime();
    // }, 1000);


    const today = () => {
        onChange(
            `${date.toLocaleString("en-us", {
                weekday: "long",
            })} ${date.getDate()}, ${date.toLocaleString("en-us", {
                month: "short",
            })} ${date.getFullYear()} `
        );
    };

    return (
        <div>
            <div className="overview-container">
                <div className="overview-description">Description</div>
                <p className="description-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet ante at risus mollis, ut rutrum arcu venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec erat suscipit, pretium quam eget, condimentum enim. </p>

                <div className="restra-overview">
                    <div className="restra-overview-column">
                        <div className="restra-cuisne-info-heading">Cuisines</div>
                        <div className="restra-cuisine-heading-info">Indian, Pakistani, Kebab, Mexican, Mordovian, Mughal, Native American, Nepalese, New Mexican</div>
                    </div>

                    <div className="restra-average-column">
                        <div className="restra-cuisne-info-heading">Average meal cost</div>
                        <div className="restra-cuisine-heading-info">AED70 for two (approx)</div>
                    </div>

                    <div className="restra-payment-column">
                        <div className="restra-cuisne-info-heading">Accepted Payment</div>
                        <div className="restra-cuisine-heading-info">Cash and Cards accepeted</div>
                    </div>

                    <div className="restra-phone-column">
                        <div className="restra-cuisne-info-heading">Phone</div>
                        <div className="restra-cuisine-heading-info">0824 4024999 <br /> 0824 3456790</div>
                        {/* <div className="restra-cuisine-heading-info"></div> */}
                    </div>

                    <div className="restra-address-column">
                        <div className="restra-cuisne-info-heading">Address</div>
                        <div className="restra-cuisine-heading-info">Shiekh Zayed Road, Dubai, UAE</div>
                    </div>
                </div>

                <div className="openingHours-getDirection">
                    <div className="opening-hours-container">
                        <div className="opening-hours-text">Opening hours</div>
                        <div className="opening-hours-info-container">
                            <div className="openning-hours-day">
                                <div className="date-open-or-close">
                                    <div className="date">{value}</div>
                                    <div className="open">Open</div>
                                </div>
                                <div className="opening-time">10:00:00 AM - 03:00:00 PM <br /> 05:30:00 PM - 11:00:00 PM</div>
                                <div className="planned-off">Planned off: 03:00 PM - 05:30 PM (Ramadan)</div>
                            </div>

                            {workingDays ? (
                                <>
                                    <div className="openning-hours-day">
                                        <div className="date-open-or-close">
                                            <div className="date">{value}</div>
                                            <div className="open">Open</div>
                                        </div>
                                        <div className="opening-time">05:30:00 PM - 11:00:00 PM</div>
                                    </div>

                                    <div className="openning-hours-day">
                                        <div className="date-open-or-close">
                                            <div className="date">{value}</div>
                                            <div className="open">Open</div>
                                        </div>
                                        <div className="opening-time">05:30:00 PM - 11:00:00 PM</div>
                                        <div className="planned-off">Planned off: 10:00 AM - 01:00 PM (Local Holiday)</div>
                                    </div>

                                    <div className="openning-hours-day">
                                        <div className="date-open-or-close">
                                            <div className="date">{value}</div>
                                            <div className="open">Open</div>
                                        </div>
                                        <div className="opening-time">05:30:00 PM - 11:00:00 PM</div>
                                    </div>

                                    <div className="openning-hours-day">
                                        <div className="date-open-or-close">
                                            <div className="date">{value}</div>
                                            <div className="open">Open</div>
                                        </div>
                                        <div className="opening-time">05:30:00 PM - 11:00:00 PM</div>
                                    </div>

                                    <div className="openning-hours-day">
                                        <div className="date-open-or-close">
                                            <div className="date">{value}</div>
                                            <div className="open">Open</div>
                                        </div>
                                        <div className="opening-time">05:30:00 PM - 11:00:00 PM</div>
                                    </div>

                                    <div className="openning-hours-day">
                                        <div className="date-open-or-close">
                                            <div className="date">{value}</div>
                                            <div className="open">Open</div>
                                        </div>
                                        <div className="opening-time">10:00:00 AM - 03:00:00 PM</div>
                                    </div>
                                </>
                            ) : ("")}

                            <div className="time-table-7-days">
                                <div className="working-hours">Work hours <span className='next-7-days' onClick={handleWorkingDays}>for next 7 days</span> {workingDays === true ? <img src={arrow} alt="" /> : <img src={arrow} alt="" />}</div>
                            </div>
                        </div>
                    </div>
                    <div className="get-direction-container">
                        <div className="get-direction-container">
                            <div className="get-direction-text">Get Direction</div>
                            <div className="direction-map">
                                map
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;