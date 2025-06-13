import { title } from './primitives';
import { getInTouch } from '../constant';
import { CircleCheck } from '../assets/icons/icons';

function GetInTouch() {
  return (
    <div className="flex-col inline-flex col-span-2">
      <h1 className={`${title({ size: 'sm' })} mb-9`}>Get In Touch</h1>
      <div>
        {getInTouch.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex gap-4 gap-y-4 mb-4 flex-start">
                <CircleCheck fill={'#fff'} size={'18'} />
                <p className="text-xl">{item.showText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetInTouch;
