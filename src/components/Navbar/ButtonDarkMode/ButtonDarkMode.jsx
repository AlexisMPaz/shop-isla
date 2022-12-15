import { useChaosModeContext } from "../../../context/ChaosModeContext";

const ButtonDarkMode = () => {

    const {toggleChaosMode} = useChaosModeContext();

    return (
        <div className="form-check form-switch">
             <input className="form-check-input" type="checkbox" role="switch" onInput={() => toggleChaosMode()}/>
        </div>
    );
}

export default ButtonDarkMode;
