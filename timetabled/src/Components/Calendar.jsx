import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Starbucks Run ☕️' color='green'/>
                        <td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <Event event='Gym 💪🏾' color='blue'/>
                        <td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event='Team Standup 📣' color='blue' />
                        <td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <Event event='Miami Beach Club' color='yellow' />
                        <td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td><td></td>
                        <Event event='Beach Walk 🏖️' color='pink' />
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <Event event='Out for Brunch 🥞😋' color='pink' />
                        <td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event='Dinner with Friends 🍽️' color='orange' />
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
 }

 export default Calendar;