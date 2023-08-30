import React, { Component } from 'react'

class PersonCard extends Component {
    render() {
        return (
                <fieldset>
                <legend>🔥🔥🔥PersonCard🔥🔥🔥</legend>
                <div >
                    <h4>{this.props.person.first_name}, {this.props.person.last_name}</h4>
                    <p>Age : {this.props.person.age}</p>
                    <p>Hair Color: {this.props.person.hair_color}</p>
                </div>
            </fieldset>
            //  <div>
            //     {/* <fieldset>
            //         {this.props.person.map(p =>
            //             <div>
            //                 <legend><h4>{p.first_name},{p.last_name}</h4></legend>
            //                 <p>{p.age}</p>
            //                 <p>{p.hair_color}</p>
            //             </div>
            //         )}
            //     </fieldset> */}
            // {/* </div> */}
        )

    }
}
export default PersonCard 