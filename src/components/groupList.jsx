/* eslint-disable indent */
import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    return (
        <>
            <ul className="list-group">
                {Array.isArray(items)
                    ? items.map((item) => (
                          <li
                              className={
                                  "list-group-item" +
                                  (selectedItem === item ? " active" : "")
                              }
                              key={item[valueProperty]}
                              role="button"
                              onClick={() => onItemSelect(item)}
                          >
                              {item[contentProperty]}
                          </li>
                      ))
                    : Object.keys(items).map((key) => (
                          <li
                              className={
                                  "list-group-item" +
                                  (selectedItem === items[key] ? " active" : "")
                              }
                              role="button"
                              onClick={() => onItemSelect(items[key])}
                              key={items[key][valueProperty]}
                          >
                              {items[key][contentProperty]}
                          </li>
                      ))}
            </ul>
        </>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object
};

export default GroupList;
