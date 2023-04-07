export default function ShipInfo({data}) {
    return (
        <div>
            {/*{data?.launch_year !== 2020} &&*/}
            {/*Mission name: {data.mission_name} <br/>*/}
            {/*Launch year : {data?.launch_year} <br/>*/}
            {/*<img src={data.links?.mission_patch_small} alt="ship emblem"/>*/}

            {
                (data?.launch_year !== "2020") ?
                    (<div>
                        Mission name: {data.mission_name} <br/>
                        Launch year : {data?.launch_year} <br/>
                        <img src={data.links?.mission_patch_small} alt="ship emblem"/>
                    </div>) : null
            }
        </div>
    );
}