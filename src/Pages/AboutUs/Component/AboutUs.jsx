import React from 'react';
import { Link } from 'react-router-dom';
import "../../AboutUs/Style/AboutUs.css";

export function AboutUs() {

    return (
        <div className="about-container">
            <h1 className="about-title">🌟 Introducing e-ChildCare: Where Family Extends Beyond Blood 🌟</h1>
            <p className="about-desc">
                In today's fast-paced world, every moment matters. And we understand that for hardworking parents, striking a balance between professional commitments and the heartbeats at home can be challenging.
            </p>
            <div className="about-highlight">
                Welcome to e-ChildCare, your trusted partner in nurturing the future!
            </div>
            <p className="about-desc">
                Imagine a caregiver who doesn't just "watch" over your child but truly becomes a part of their world - blending seamlessly into the fabric of your family. A compassionate companion who understands that love, trust, and attention form the trinity of childcare.
            </p>
            <p className="about-desc">
                Our meticulously trained caretakers are more than just sitters. They're mentors, guides, friends, and sometimes even wizards who can make a math problem disappear! Entrusted with your child aged 3-12, our team is equipped not only to ensure safety and wellbeing but also to cater to those beautiful emotional nuances, be the extra eyes that spot potential areas of growth or concern, and even to tackle that tricky school homework right up to Grade 6.
            </p>
            <div className="about-signoff">
                With e-ChildCare, you're not just booking a service; you're adding a loving touch to your child's day, a touch that feels almost as tender as yours.
            </div>
            <div className="about-mission">
                💖 e-ChildCare: Crafting Memories, One Smile at a Time. 💖
            </div>
            <p className="about-footer">
                Come, be a part of our family. Because together, we make every moment count.
            </p>

            <div className="about-container">
                <Link to="/" className="get-started-button">Get Started</Link>
            </div>
        </div>
    );
}
