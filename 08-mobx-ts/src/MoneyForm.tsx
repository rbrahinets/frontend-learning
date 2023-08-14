import { action, computed, observable, toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

interface FormState {
    // total: number;
    years: number;
    salary: number;
}

const formState: FormState = observable({
    // total: 0,
    years: 0,
    salary: 0,
});

const MoneyForm = () => {
    // const calculateTotal = action((formState: FormState) => {
    //     formState.total = formState.years * formState.salary;
    // });

    const totalValue = computed(() => formState.years * formState.salary);

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
                <>Total: {toJS(totalValue)}</>
                <input
                    type="number"
                    placeholder="Years..."
                    style={{ height: '40px' }}
                    onChange={action(
                        (e) => (formState.years = Number(e.target.value))
                    )}
                />
                <input
                    type="number"
                    placeholder="Yearly salary..."
                    style={{ height: '40px' }}
                    onChange={action(
                        (e) => (formState.salary = Number(e.target.value))
                    )}
                />
                {/* <button type="button" onClick={() => calculateTotal(formState)}>
                    Calculate total
                </button> */}
            </div>
        </React.Fragment>
    );
};

export default observer(MoneyForm);
