/**
 * 离开房间
 */
class S12
{
    public parseData(obj:any)
    {

        if(!obj) return;

        if(+obj["code"] <= 0)
        {
            //LayerManager.gameLayer().openSceneLayer();
            GSController.i.exit();
        }
    }
}