import React from 'react';
import Card, { ICardProps } from './components/Card';

function App() {

  const datas = [
    {
      id: 1,
      job: "Commis de cuisine",
      pricePerHour: 20,
      durationInMinutes: 240,
    },
    {
      id: 2,
      job: "Plongeur",
      pricePerHour: 18,
      durationInMinutes: 270,
    },
    {
      id: 3,
      job: "Chef pâtissier",
      pricePerHour: 21,
      durationInMinutes: 195,
    },
  ];

  return (
    <div className="App">
      <h1>Missions</h1>
      {
        datas.map((data: ICardProps) => {
          return (
            <>
              <Card
                key={data.id}
                id={data.id}
                job={data.job}
                pricePerHour={data.pricePerHour}
                durationInMinutes={data.durationInMinutes}
              />
            </>
          )
        })
      }
    </div>
  );
}

export default App;
