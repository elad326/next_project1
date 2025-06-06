
"use client";

import { useCallback, useState } from "react";

export default function useActionState(action, initialState){

    const [state, setState] = useState(initialState);

    const formAction = useCallback((formData) => {

        const result = action(state, formData);

        if(result instanceof Promise){
            result.then((data) => {
                setState(data);
            });
        }else{
            setState(result);
        }

    }, [state, action]);

    return [state, formAction];

}

