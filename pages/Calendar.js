import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../styles/Home.module.css';

function DashCalendar() {
    // https://www.npmjs.com/package/react-calendar
    const [value, onChange] = useState(new Date());
    return (
        <div className={styles.calendar_container}>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default DashCalendar;