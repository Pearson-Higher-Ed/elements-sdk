import React from 'react';
import PropTypes            from 'prop-types';

const RadioCheckGroup = ({ legendText, options, name, inputType, glpType, glpTopLevel, changeHandler }) => {
    return (
          <fieldset className="pe-fieldset">
            <legend className="pe-legend">{legendText}</legend>
            {options.map((opt, i) => {
              return (
                    <div key={`${name}-${opt.value}-${i}`} className={(inputType === 'radio')?"pe-radio": !glpType ? "pe-checkbox": glpTopLevel?"pe-checkbox  pe-checkbox__circle pe-checkbox__circle_top" :"pe-checkbox pe-checkbox__circle pe-checkbox__circle_second"}>
                      <input id       = {`radiocheck-${name}-${opt.value}-${i}`}
                             type     = {inputType}
                             name     = {name}
                             value    = {opt.value}
                             checked  = {opt.checked}
                             disabled = {opt.disabled}
                             onChange = {changeHandler}
                             />
                      <label htmlFor={`radiocheck-${name}-${opt.value}-${i}`}>{opt.label}</label>

                        {
                          !glpType
                          ? <span>
                              <svg
                                aria-hidden = "true"
                                focusable   = "false"
                                className   = {inputType==='radio'?"pe-icon--radio-dot":"pe-icon--check-sm-18"}
                                >
                                <use xlinkHref={inputType==='radio'?"#new-notification-9":"#check-sm-18" }></use>
                              </svg>
                            </span>
                          : <span>
                              <span className="checked">
                                <svg focusable="false" className="pe-icon--check-sm-18" aria-hidden="true" >
                                    <use xlinkHref="#check-sm-18"></use>
                                </svg>
                              </span>
                              <span className="indeterminate-icon">
                                  <svg focusable="false" className="pe-icon--placeholder-indeterminate-18" aria-hidden="true" >
                                    <use xlinkHref="#placeholder-indeterminate-18"></use>
                                  </svg>
                                </span>
                            </span>
                        }
                        
                    </div>
                  )
              })
            }
          </fieldset>
      )
    }

export default RadioCheckGroup;


RadioCheckGroup.propTypes = {
  id              : PropTypes.string.isRequired,
  legendText      : PropTypes.string.isRequired,
  options         : PropTypes.array.isRequired,
  inputType       : PropTypes.string.isRequired,
  changeHandler   : PropTypes.func.isRequired,
  name            : PropTypes.string,
  glpType         : PropTypes.bool,
  glpTopLevel     : PropTypes.bool
};
