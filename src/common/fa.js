import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//===========================
// FA =======================
//===========================
const Fa = (props) => (
    <span className="fa-li">
      <FontAwesomeIcon icon={props.i} />
    </span>
  );

export default Fa;