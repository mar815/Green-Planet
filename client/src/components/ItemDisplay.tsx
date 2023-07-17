import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RecycleIcon from '@mui/icons-material/DeleteForever';

interface Item {
  id: string;
  name: string;
  description: string;
  recycle_method: string;
  recycle_location: string;
}

interface ItemDisplayProps {
  itemId: string;
}

const ItemDisplay: React.FC<ItemDisplayProps> = ({ itemId }) => {
  const [item, setItem] = useState<Item | null>(null);

  // Fetch the item data when the component mounts
  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`/api/items/${itemId}`);
      const itemData = await response.json();
      setItem(itemData);
    };

    fetchItem();
  }, [itemId]);

  // If the item data has not been fetched yet, display a loading message
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="body2" component="p" sx={{ mt: 2 }}>
            {item.description}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <RecycleIcon color="primary" />
            <Typography variant="body2" component="p">
              {item.recycle_method}
            </Typography>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon color="secondary" />
            <Typography variant="body2" component="p">
              {item.recycle_location}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ItemDisplay;
