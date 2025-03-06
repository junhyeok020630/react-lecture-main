import React from "react";

// css 추가
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
        backgroundColor: "lightgrey",
    },
    imageContainer: {},
    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
    },
    contentContatiner: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function BlackAndWhite(props) {
    return (
        <div style = {styles.wrapper}>
            <div style = {styles.imageContainer}>
                <img alt="" 
                    src={props.imageUrl}
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContatiner}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
        
    );
}
export default BlackAndWhite;