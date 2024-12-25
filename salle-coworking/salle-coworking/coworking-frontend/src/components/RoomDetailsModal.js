import React from 'react';

const RoomDetailsModal = ({ isOpen, onClose, room }) => {

    if(!isOpen || !room) return null;
    console.log(room)
    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>×</span>
                <h2>Détails de la Salle</h2>
                {room.photo && (
                    <img src={`data:image/png;base64,${room.photo}`} alt={room.roomType} style={{maxWidth: '200px'}}/>
                )}
                <p><strong>Type:</strong> {room.roomType}</p>
                <p><strong>Prix par heure:</strong> {room.pricePerHour}</p>
            </div>
        </div>
    );
};

export default RoomDetailsModal;