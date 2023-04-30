import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInshights from '../EditorsInshights/EditorsInshights';


const News = () => {
    const news = useLoaderData();
    console.log(news);
  
    const { _id, title, details, image_url, category_id } = news;
    // console.log(title);
  
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft></FaArrowLeft>  All News in this category</Button></Link>
                </Card.Body>
                <EditorsInshights></EditorsInshights>
            </Card>
            
        </div>
    );
};

export default News;